import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const fetchApi = await fetch(process.env.API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await fetchApi.json();

  res.status(200).json(response);
};

export default handler;
