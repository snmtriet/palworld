import path from "path";
import fs from "fs";

export async function GET(request: Request) {
  return Response.json({ message: "Hello from Next.js!" });
}

export async function POST(request: Request) {
  const body = await request.json();

  const folderPath = path.join(process.cwd(), "pals");
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  const filePath = path.join(folderPath, `pals.json`);
  const jsonString = JSON.stringify(body, null, 2);
  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log(`JSON file  saved to "pals" folder.`);
    }
  });

  return Response.json("đã lưu");
}
