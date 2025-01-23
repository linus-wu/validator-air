import { rm } from "fs/promises";

const clean = async () => {
  try {
    await rm("dist", { recursive: true, force: true });
  } catch (err) {
    console.error("Failed to delete dist folder:", err.message);
  }
};

clean();
