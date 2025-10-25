export function validateSQL(query: string): boolean {
    const injectionPatterns = [
        /' OR '/i,
        /--/i,
        /; DROP/i,
        /\bUNION\b/i,
        /\bSELECT\b.*\bFROM\b/i,
        /\bINSERT\b.*\bINTO\b/i
    ];

    return !injectionPatterns.some(pattern => pattern.test(query));
}
