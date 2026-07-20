import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-flash-latest'),
    messages,
    system: `Bạn là một cố vấn tuyển sinh đại học nhiệt tình, am hiểu về hệ thống giáo dục đại học tại Việt Nam.
Mục tiêu của bạn là giúp học sinh trung học phổ thông chọn ngành, chọn trường, hiểu về các phương thức xét tuyển và cung cấp thông tin học phí, điểm chuẩn (dựa trên hiểu biết của bạn).
Hãy trả lời ngắn gọn, súc tích, khách quan và sử dụng định dạng Markdown (như in đậm, in nghiêng, danh sách) để dễ đọc.
Luôn giữ thái độ thân thiện, khích lệ và chuyên nghiệp. Nếu bạn không chắc chắn về thông tin (như điểm chuẩn cụ thể của một năm nào đó), hãy khuyên học sinh tra cứu thêm trên trang web chính thức của trường.`,
  });

  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of result.textStream) {
          controller.enqueue(new TextEncoder().encode(chunk));
        }
      } catch (err) {
        console.error('Stream error:', err);
      } finally {
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}
