import tkinter as tk
root = tk.Tk()
root.geometry("400x400")

canvas = tk.Canvas(root, 
                   width=350, 
                   height=350, 
                   background="#cc754a")
canvas.pack()

timmy = canvas.create_oval(20, 20, 100, 100, outline="#6C6969", fill="#6C6969")

#adding buttons routine:


hell_corner = 0
def prev_button_pressed():
    global hell_corner
    hell_corner -= 1
    if hell_corner < 0:
        hell_corner = 3
    change_position() 

def next_button_pressed():
    global hell_corner
    hell_corner += 1
    if hell_corner > 3:
        hell_corner = 0
    change_position() 

def change_position(): 
    if hell_corner == 0: #top left
        canvas.move(timmy,20, 20, 100, 100)

    elif hell_corner == 1: #top right
        canvas.move(timmy,300, 20, 380, 100)

    elif hell_corner == 2: #buttom left
        canvas.move(timmy,300, 300, 380, 380)

    elif hell_corner == 3: #buttom right
        canvas.move(timmy,20, 300, 100, 380)

prev_button = tk.Button(root, text="Previous", command=prev_button_pressed)
prev_button.pack()

next_button = tk.Button(root, text="Next", command=next_button_pressed)
next_button.pack()

root.mainloop()
