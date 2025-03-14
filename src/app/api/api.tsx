// import { NextApiRequest, NextApiResponse } from "next";
// import db from "@/db/drizzle";
// import { productsTable } from "@/db/schema";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log("Requisição recebida:", req.method, req.body);

//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Método não permitido" });
//   }
// const { name, description, price, available } = req.body;

//   if (!name || !description || !price || available === undefined) {
//     return res.status(400).json({ error: "Dados inválidos fornecidos" });
//   }

//   try {
//     await db
//       .insert(productsTable)
//       .values({ name, description, price, available });
//     return res.status(201).json({
//       message: "Produto adicionado com sucesso",
//       dadosRecebidos: req.body,
//     });
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : "Erro desconhecido";
//     return res.status(500).json({
//       error: "Erro ao adicionar produto",
//       detalhes: errorMessage,
//     });
//   }
// };

// export default handler;
