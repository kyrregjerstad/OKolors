export function deleteColor(colorId: string, store: any) {
	console.log(store);
	const newColors = store.filter((color: any) => color.id !== colorId);
	store.set({ colors: newColors });
}
