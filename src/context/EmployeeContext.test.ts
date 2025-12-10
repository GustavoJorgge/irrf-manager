import { renderHook, act } from "@testing-library/react";
import { EmployeeProvider } from "./EmployeeProvider";
import { describe, it, expect } from "vitest";
import { useEmployee } from "./EmployeeContext";

describe("EmployeeContext", () => {
  it("Preenche formulario e adiciona um funcionário corretamente", () => {
    const { result } = renderHook(() => useEmployee(), {
      wrapper: EmployeeProvider,
    });

    act(() => {
      result.current.addEmployee({
        name: "João",
        cpf: "12345678900",
        salary: 2000,
        previousDiscount: 100,
        dependents: 0,
      });
    });

    expect(result.current.employees.length).toBe(1);
    expect(result.current.employees[0].name).toBe("João");
  });
});
