import tkinter as tk
from tkinter import BOTH, END, LEFT
import pyjokes
import string
from random import *
window = tk.Tk()
window.title("Python Tkinter Text Box")
window.minsize(60, 50)


def clickMe():
    label.configure(text=generatePs())


def generatePs():
    characters = string.ascii_letters.upper() + string.punctuation + \
        string.digits + string.ascii_letters.lower()
    return ("".join(choice(characters) for x in range(int(name.get()))))


def set_text(text):
    e.delete(0, END)
    e.insert(0, generatePs())
    return


e = tk.Entry(window, width=40)
e.grid(column=0, row=0,columnspan = 3)

name = tk.StringVar()
nameEntered = tk.Entry(window, width=3, textvariable=name)
nameEntered.grid(column=1, row=1)


label = tk.Label( window, text="Password Length : " )
label.grid(column=0, row=1)

button = tk.Button(window, text="GENERATE", command=lambda: set_text(generatePs))
button.grid(column=2, row=1)

window.mainloop()
