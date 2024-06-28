'use server'

type UserData = {
  username: string;
  fullName: string;
  // Thêm các trường dữ liệu khác cần thiết
};

class Hashtable {
  private data: Record<string, UserData>;

  constructor() {
    this.data = {};
  }

  insert(username: string, userData: UserData) {
    this.data[username] = userData;
  }

  get(username: string): UserData | undefined {
    return this.data[username];
  }

  remove(username: string) {
    delete this.data[username];
  }
}

export default Hashtable;
