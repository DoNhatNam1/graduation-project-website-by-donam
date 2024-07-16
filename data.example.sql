-- Paste this function to psql first
CREATE OR REPLACE FUNCTION insertExampleDataFunction()
RETURNS VOID AS $$
DECLARE
    agency_id UUID;
BEGIN
    INSERT INTO "TbAdmin" ("id", "password", "name", "phone_number", "address", "urlhost", "email", "image", "updatedAt")
    VALUES ('d309125c-94d9-4ca3-a329-49a863d3beea', 'admin_password', 'Admin User', 123456789, 'Admin Address', 'admin.test.com', 'admin@example.com', 'admin_image_url', '2024-07-16 17:41:12.232');

    INSERT INTO "TbAgencyAccount" ("id", "password", "name", "phone_number", "address", "role", "urlhost", "email", "image", "updatedAt")
    VALUES 
      ('f3c5078b-a138-4b4e-8577-59ceb66551cd', 'agency_password1', 'Agency User 1', 987654321, 'Agency Address 1', 'Agency', 'agency1.test.com', 'agency1@example.com', 'agency_image_url1', '2024-07-16 17:41:12.232'),
      ('2ea470c5-c255-4406-b37c-4fe851328fa2', 'agency_password2', 'Agency User 2', 987654322, 'Agency Address 2', 'Agency', 'agency2.test.com', 'agency2@example.com', 'agency_image_url2', '2024-07-16 17:41:12.232');

    SELECT id INTO agency_id FROM "TbAgencyAccount" WHERE name = 'Agency User 1' LIMIT 1;

    INSERT INTO "TbSubAccount" ("id", "AgencyId", "password", "name", "phone_number", "address", "urlhost", "email", "image", "updatedAt")
    VALUES 
      ('a3399f3b-967e-4ec1-9af5-85a685856d61', agency_id, 'subaccount_password1', 'SubAccount User 1', 555555551, 'SubAccount Address 1', 'subaccount1.test.com', 'subaccount1@example.com', 'subaccount_image_url1', '2024-07-16 17:41:12.232'),
      ('d945e09a-53cf-4e98-8f58-203aef80cba7', agency_id, 'subaccount_password2', 'SubAccount User 2', 555555552, 'SubAccount Address 2', 'subaccount2.test.com', 'subaccount2@example.com', 'subaccount_image_url2', '2024-07-16 17:41:12.232'),
      ('80f8228f-9d61-4285-be06-cb87ddba9000', agency_id, 'subaccount_password3', 'SubAccount User 3', 555555553, 'SubAccount Address 3', 'subaccount3.test.com', 'subaccount3@example.com', 'subaccount_image_url3', '2024-07-16 17:41:12.232'),
      ('382e58cf-7b5f-49cf-b3ec-f7568dd7c130', agency_id, 'subaccount_password4', 'SubAccount User 4', 555555554, 'SubAccount Address 4', 'subaccount4.test.com', 'subaccount4@example.com', 'subaccount_image_url4', '2024-07-16 17:41:12.232'),
      ('e5c9e011-9e83-4d04-a3e1-4f965ca31202', agency_id, 'subaccount_password5', 'SubAccount User 5', 555555555, 'SubAccount Address 5', 'subaccount5.test.com', 'subaccount5@example.com', 'subaccount_image_url5', '2024-07-16 17:41:12.232'),
      ('80811420-4180-4a05-80bb-f36d1944978c', agency_id, 'subaccount_password6', 'SubAccount User 6', 555555556, 'SubAccount Address 6', 'subaccount6.test.com', 'subaccount6@example.com', 'subaccount_image_url6', '2024-07-16 17:41:12.232'),
      ('7846ad77-2102-4827-82fa-4304242db6cd', agency_id, 'subaccount_password7', 'SubAccount User 7', 555555557, 'SubAccount Address 7', 'subaccount7.test.com', 'subaccount7@example.com', 'subaccount_image_url7', '2024-07-16 17:41:12.232'),
      ('f7c739b6-7d4c-46d5-93cd-3cff00e146ec', agency_id, 'subaccount_password8', 'SubAccount User 8', 555555558, 'SubAccount Address 8', 'subaccount8.test.com', 'subaccount8@example.com', 'subaccount_image_url8', '2024-07-16 17:41:12.232');
END;
$$ LANGUAGE plpgsql;


-- Then paste this sql after the function add success to database
SELECT insertExampleDataFunction();


-- Delete Function
DROP FUNCTION IF EXISTS insertExampleDataFunction();
