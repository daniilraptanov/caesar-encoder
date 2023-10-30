export interface CaesarEncoderService {
    encode(originalText: string, shift?: number): string;
    decode(encodedText: string, shift?: number): string;
}
