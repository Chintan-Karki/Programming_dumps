import tkinter as tk
import pyjokes

root = tk.Tk()
root.geometry("300x200")
root.title("Fun")
T = tk.Text(root, height=10, width=100)
T.pack()


def generateJokes():
    global generateJokes
    joke = pyjokes.get_joke()
    T.insert(tk.END, joke)


b = tk.Button(text="JOKE", command=generateJokes)
b.pack()
root.mainloop()
