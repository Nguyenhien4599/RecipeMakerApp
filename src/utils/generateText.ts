export const generateText = (data: { id: number; text: string }[], listId: number[], other: string) => {
    let text = '';
    data.forEach((item) => {
        listId.forEach((idItem) => {
            if (item.id === idItem && idItem !== 9) {
                text += `${item.text}, `;
            }
        });
    });
    text = text.trim().slice(0, -1);
    return !other ? text : text ? `${text}, ${other}` : other;
};
