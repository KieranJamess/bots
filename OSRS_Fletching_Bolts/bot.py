from pyautogui import *
import pyautogui
import time
import keyboard
import random
import win32api, win32con
from random import randrange

# I have a 32:9 Ultrawide monitor so these pixel values probably won't match up

feathers_x = 3310
feathers_y = -322

bolts_x = 3350
bolts_y = -322

def click(x, y, SleepTime):
        pyautogui.click(randrange(x, x + 15), randrange(y, y + 15))
        time.sleep(SleepTime)

while True:
    if keyboard.is_pressed("q"):
        print("q pressed, ending loop")
        break
    else:
        click(feathers_x, feathers_y, 0.1)
        click(bolts_x, bolts_y, 0.1)