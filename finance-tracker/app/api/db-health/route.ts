import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // Lightweight query to test connectivity
    const now = await prisma.$queryRaw`SELECT NOW()`;
    return new Response(JSON.stringify({ ok: true, now }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


