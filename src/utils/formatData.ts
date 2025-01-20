export const formatDataResponse = (str: string): { [key: string]: string } => {
    const sections: { [key: string]: string } = {};
    const regex = /\*\*(.*?)\*\*\s*(.*?)(?=\*\*|$)/gs;
    let match;

    while ((match = regex.exec(str)) !== null) {
        const title = match[1].trim();
        const content = match[2].trim();
        sections[title] = content;
    }

    return sections;
};

export const convertStringResponseToTable = (input: string) => {
    const lines = input.trim().split('\n');
    return lines.slice(3).map((line) => {
        let result: string[] = [];
        line.split('|').forEach((item) => {
            if (item) result.push(item.trim());
        });
        return result;
    });
};

export const convertStringResponseToArrayHeader = (input: string) => {
    let result: string[] = [];
    const lines = input.trim().split('\n')[0].split('|');
    lines.forEach((text) => {
        if (text) result.push(text.trim());
    });
    return result;
};
