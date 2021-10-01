
"""
The Caesar cipher is an ancient encryption algorithm used by
Julius Caesar. It encrypts letters by shifting them over by a
certain number of places in the alphabet. We call the length
of shift the key. For example, if the key is 3, then A becomes D,
 B becomes E, C becomes F, and so on. To decrypt the message,
you must shift the encrypted letters in the opposite direction.
This program lets the user encrypt and decrypt messages according to this algorithm.
"""

"""

# * DEMO PROGRAM RUN

Hi there!
Welcome to Caesar Cipher Program.
This program encrypts the input, through shifting the character over by a key.

Enter 'e' to encrypt, or 'd' to decrypt.
>> e

Please enter a key to use i.e. (0 to 25).
>> 5

Enter a text/sentence/code you want to perform encryption on.
>> chintan

Cipher after encryption: >> HMNSYFS

** The final text after encryption has been copied to your clipboard. **

--> Wanna learn more about Caesar's cpyher? (y)?
>> y

Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

For more details, Visit: https://en.wikipedia.org/wiki/Caesar_cipher

See you soon.

"""

# TO copy the cipher to the clipboard
try:
    import pyperclip
except ImportError:
    pass


possible_symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
print('Hi there!\nWelcome to Caesar Cipher Program.')
print('This program encrypts the input, through shifting the character over by a key.')
print()

while True:
    print("Enter \'e\' to encrypt, or \'d\' to decrypt.")
    user_decision = input(">> ").lower()
    if user_decision.startswith('e'):
        choice = 'encryption'
        break
    elif user_decision.startswith('d'):
        choice = 'decryption'
        break
    print('\nPlease enter one of \'e\' or \'d\' only ')

while True:
    print("\nPlease enter a key to use i.e. (0 to {}).".format(
        len(possible_symbols) - 1))
    user_decision = input(">> ").upper()
    if user_decision.isdecimal() != True:
        continue
    if 0 <= int(user_decision) < len(possible_symbols):
        chosen_key = int(user_decision)
        break

print('\nEnter a text/sentence/code you want to perform {} on.'.format(choice))
original_message = input('>> ')

# since possible symbols are all in upper case 🙂
original_message = original_message.upper()

final_message = ''

# Main Cipher algorithm
for letter in original_message:
    if letter in possible_symbols:
        # Get the letter's position/index
        letter_position = possible_symbols.find(letter)
        if choice == 'encryption':
            letter_position = letter_position + chosen_key
        elif choice == 'decryption':
            letter_position = letter_position - chosen_key

        if letter_position >= len(possible_symbols):
            letter_position = letter_position - len(possible_symbols)
        elif letter_position < 0:
            letter_position = letter_position + len(possible_symbols)

        final_message = final_message + possible_symbols[letter_position]
    else:
        final_message = final_message + letter

print('\nCipher after {}: >>'.format(choice), final_message)

try:
    pyperclip.copy(final_message)
    print('\n** The final text after {} has been copied to your clipboard. **'.format(choice))
except:
    pass

while True:
    print('\n--> Wanna learn more about Caesar\'s cpyher? (y)?')
    user_decision = input(">> ").lower()
    if user_decision.startswith('y'):
        print('\nCaesar\'s cipher, the shift cipher, Caesar\'s code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.')

        print()
        print('For more details, Visit: https://en.wikipedia.org/wiki/Caesar_cipher')
        print('\nSee you soon.')

        break
    else:
        print('See you soon.')
        break
