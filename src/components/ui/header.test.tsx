import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./header";
import Providers from "@/lib/Providers";

describe("<Header/>", () => {
  test("render header", () => {
    render(<Header />, { wrapper: Providers });
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Shoppers Mart",
      })
    );
  });
});
