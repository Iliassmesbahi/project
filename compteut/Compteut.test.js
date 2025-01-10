import React from "react";
import { render, screen} from "@testing-library/react";
import Compteur from "./Compteur";
import "@testing-library/jest-dom";
describe("Composant Counter", () => {
test("affiche le compteur initial à 0", () => {
render(<Compteur />);
expect(screen.getByText("Compteur : 0")).toBeInTheDocument();
});
});