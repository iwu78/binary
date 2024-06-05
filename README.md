Set of image related tools related to binary. Frontend (JS, HTML/CSS) only.

Colors introduction to RGB using togglable 0-1 binary representations of decimal numbers (0-255, 8 bits). Two colors represented by their RGB values have AND operation performed on their RGB values bitwise and resulting color is returned. Useful for first-time introductions to binary representations and visualizing/explaining how the color palette is created from binary.

Logic Gate (AND, OR, XOR) combiners with Images help to explain logic gates. This can be done by running two black and white images with overlapping areas and viewing resulting image, especially helpful for XOR gate.

XOR Gate can be used for obfuscation by generating a random key the same size as the text or image to be encrypted, and then XORing the two together. XOR works on itself and therefore is not necessary to have separate encryption and decryption. Not suitable for secure encryption due to use of pRNG.

Steganography uses Least Significant Bit encryption to encode messages by breaking down RGB values into bits and using the last two to encode data. This changes the image in a way imperceptible to the human eye but readable by a computer.
