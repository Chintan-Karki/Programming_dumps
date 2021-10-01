
"""
The Caesar cipher is an ancient encryption algorithm used by 
Julius Caesar. It encrypts letters by shifting them over by a 
certain number of places in the alphabet. We call the length 
of shift the key. For example, if the key is 3, then A becomes D,
 B becomes E, C becomes F, and so on. To decrypt the message, 
you must shift the encrypted letters in the opposite direction. 
This program lets the user encrypt and decrypt messages according to this algorithm.
"""
try:
    import pyperclip
except ImportError:
    pass


possible_symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
print('Hi there!\nWelcome to Caesar Cypher Program.')
print('This program encrypts the input, through shifting the character over by a key.')
print()

while True:
    print(" Enter \'e\' to encrypt, or \'d\' to decrypt.")
    user_decision = input(">> ").lower()
    if user_decision.startswith('e'):
        choice = 'encryption'
        break
    elif user_decision.startswith('d'):
        choice = 'decryption'
        break
    print('Please enter one of \'e\' or \'d\' only ')

while True:
    print("Please enter a key to use i.e. (0 to {}).".format(
        len(possible_symbols) - 1))
    user_decision = input(">> ").upper()
    if user_decision.isdecimal() != True:
        continue
    if 0 <= int(user_decision) < len(possible_symbols):
        chosen_key = int(user_decision)
        break

print('Enter a text/sentence/code you want to perform {} on.'.format(choice))
original_message = input('>> ')

# since possible symbols are all in upper case 🙂
original_message = original_message.upper()

final_message = ''

# Main cypher algorithm
for possible_symbols in original_message:
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


