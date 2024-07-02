import { atom } from "jotai";

export const selectedBulkItemsAtom = atom<string[]>([]);

/** Reset the atom when it mounts */
selectedBulkItemsAtom.onMount = (setAtom) => {
  setAtom([]);
};

/* This atom is used to keep track of the number of selected items */
export const selectedBulkItemsCountAtom = atom(
  (get) => get(selectedBulkItemsAtom).length
);

/**
 * Set an item in selectedBulkItems
 */
export const setSelectedBulkItemAtom = atom<null, string[], unknown>(
  null, // it's a convention to pass `null` for the first argument
  (_, set, update) => {
    set(selectedBulkItemsAtom, (prev) => {
      if (prev.includes(update)) {
        return prev.filter((item) => item !== update);
      }

      return [...prev, update];
    });
  }
);

/**
 * Set multiple items at once in selectedBulkItems
 */
export const setSelectedBulkItemsAtom = atom<null, string[][], void>(
  null,
  (_, set, update) => {
    set(selectedBulkItemsAtom, update);
  }
);
