from pyautogui import *
import pyautogui
import time
import keyboard
import random
import win32api, win32con

# I have a 32:9 Ultrawide monitor so these pixel values probably won't match up

tiles_y = 450 # Can be standard across all tiles
tile1_x = 2210 
tile2_x = 2310
tile3_x = 2410
tile4_x = 2510

def click(x,y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
    time.sleep(0.05)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,0,0)

while keyboard.is_pressed('e') == False:
    if pyautogui.pixel(tile1_x, tiles_y)[0] == 0:
        click(tile1_x, tiles_y)
    elif pyautogui.pixel(tile2_x, tiles_y)[0] == 0:
        click(tile2_x, tiles_y)
    elif pyautogui.pixel(tile3_x, tiles_y)[0] == 0:
        click(tile3_x, tiles_y)
    elif pyautogui.pixel(tile4_x, tiles_y)[0] == 0:
        click(tile4_x, tiles_y)
    else:
        keyboard.press_and_release('e')