import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Tests in the useFetchGifs hook", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;

    expect(images).toEqual([]);
    expect(isLoading).toBe(true);
  });

  test("should return an array of images and isLoading set to false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // Ensure we wait for the hook to update (data fetching completed)
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    // Check if images have been fetched and isLoading is false
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
