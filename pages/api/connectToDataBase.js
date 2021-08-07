import { MongoClient } from "mongodb";

export default async function serverHandler(req, res) {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://lokesh:lokesh1998@cluster0.a9utr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    return client;
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }
}
