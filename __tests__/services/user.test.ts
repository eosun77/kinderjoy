import { isValidName, findUserByName } from "@/services/user";
import { prismaMock } from "@/prisma/singleton";

describe("user services", () => {
  describe("isValidName", () => {
    it("should return true for valid names", () => {
      expect(isValidName("John Doe")).toBeTruthy();
      expect(isValidName("Jane")).toBeTruthy();
    });

    it("should return false for invalid names", () => {
      expect(isValidName("")).toBeFalsy();
      expect(isValidName(null)).toBeFalsy();
      expect(isValidName(undefined)).toBeFalsy();
      expect(isValidName(123)).toBeFalsy();
    });
  });

  describe("findUserByName", () => {
    it("should find a user by name", async () => {
      const name = "John Doe";
      const mockUser = { id: "1", name: "John Doe" };
      prismaMock.user.findUnique.mockResolvedValue(mockUser);

      const user = await findUserByName(name);
      expect(user).toEqual(mockUser);
    });

    it("should return null if user is not found", async () => {
      prismaMock.user.findUnique.mockResolvedValue(null);
      const user = await findUserByName("Nonexistent User");
      expect(user).toBeNull();
    });
  });
});
