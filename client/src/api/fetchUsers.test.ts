import { expect, it, describe, vi } from "vitest";
import fetchUsers from "./fetchUsers";
import { USERS_ENDPOINT } from "../../../config";

const spy = vi.hoisted(vi.fn);

describe("api > fetchUsers", () => {
  vi.mock("../services/fetchService", () => ({
    default: spy,
  }));

  it("should call fetchService with correct parameters", () => {
    fetchUsers();

    expect(spy).toHaveBeenCalledWith(USERS_ENDPOINT);
  });
});
