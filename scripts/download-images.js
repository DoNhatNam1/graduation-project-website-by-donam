
// Get-Content .\src\app\Testing\ConvertImageToLocal\page.tsx | node .\scripts\download-images.js | Set-Clipboard

const fs = require("fs");
const https = require("https");
const readline = require("readline");

async function main() {
  // Read all the STDIN
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
    encoding: 'utf8' // Đảm bảo đọc dữ liệu UTF-8
  });
  let input = "";
  rl.on("line", (line) => {
    input += line + "\n";
  });

  rl.on("close", async () => {
    const downloads = {};

    // Find all the image tags and fix them
    input = input.replace(/<img\s+(.*?)\/>/gms, (val) => {
      if (val.includes("src=")) {
        const url = val.match(/src="(.*?)"/)[1];
        let idMatch = url.match(/\/([^?/]+)\?/);
        if (idMatch) {
          const id = idMatch[1];
          val = val.replace(`src="${url}"`, `src="/${id}.unk"`);
          downloads[url] = id;
        } else {
          console.error(`Failed to extract id from url: ${url}`);
        }
      }
      if (val.includes("srcSet=")) {
        const values = val.match(/srcSet="(.*?)"/)[1];
        const urls = values.split(",");
        let url = urls[0].split(" ")[0];
        let idMatch = url.match(/\/([^?/]+)\?/);
        if (idMatch) {
          let id = idMatch[1];
          val = val.replace(`srcSet="${values}"`, `src="/${id}.unk"`);

          const sizes =
            urls.map((url) => {
              return url?.trim()?.split(" ")?.[1];
            }) || [];
          val = val.replace(
            /<img/,
            `<img sizes="${sizes.filter((v) => v).join(", ")}"`
          );
          downloads[url] = id;
        } else {
          console.error(`Failed to extract id from url: ${url}`);
        }
      }
      if (!val.includes("alt=")) {
        val = val.replace(
          /<img/,
          '<img alt="Replace with an informative alt text"'
        );
      }
      val = val.replace(/<img/, "<Image");
      return val;
    });

    await Promise.all(
      Object.keys(downloads).map(async (url) => {
        await new Promise((resolve) => {
          https.get(url, async (response) => {
            // Figure out what type of image this is
            let ext = "png";
            const type = response.headers["content-type"];
            if (type.includes("svg")) {
              ext = "svg";
            } else if (type.includes("jpeg") || type.includes("jpg")) {
              ext = "jpg";
            }

            // Download the file into /public
            await new Promise((frs) => {
              const file = fs.createWriteStream(
                `./public/${downloads[url]}.${ext}`
              );
              response.pipe(file);
              file.on("finish", () => {
                file.close();
                frs();
              });
            });

            // Replace the src URL with a new URL that has the right extension
            input = input.replace(
              `"/${downloads[url]}.unk"`,
              `{img_${downloads[url]}}`
            );

            // Figure out the size of the image
            let width = 1000;
            let height = 1000;
            if (ext === "svg") {
              const svgCode = fs.readFileSync(
                `./public/${downloads[url]}.svg`,
                "utf-8"
              );
              width = svgCode.match(/width="(.*?)"/)[1];
              height = svgCode.match(/height="(.*?)"/)[1];
            }

            // Add the height and width because the Image component requires it
            input = input.replace(
              `"/${downloads[url]}.${ext}"`,
              `"/${downloads[url]}.${ext}" width={${width}} height={${height}}`
            );

            resolve();
          });
        });
      })
    );

    // Generate import statements for images in public folder
    let importStatements = "";
    for (const url in downloads) {
      if (downloads.hasOwnProperty(url)) {
        const idMatch = url.match(/\/([^?/]+)\?/);
        if (idMatch) {
          const id = idMatch[1];
          let ext = "png"; // Default extension
          // Determine extension based on content-type (if available)
          // Assuming `fetch` is defined somewhere for fetching headers
          const response = await fetch(url); // Fetch the image URL to get the response
          const type = response.headers.get("content-type");
          if (type.includes("svg")) {
            ext = "svg";
          } else if (type.includes("jpeg") || type.includes("jpg")) {
            ext = "jpg";
          }
          importStatements += `import img_${id} from '../public/${id}.${ext}';\n`;
        }
      }
    }

    // Insert import statements at the beginning of the file
    input = importStatements + "\n" + input;

    // Write the adjusted code back to the page.tsx file
    fs.writeFile("./src/app/Testing/ConvertImageToLocal/page.tsx", input, 'utf8', (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("page.tsx updated successfully.");
    });
  });
}

main();
