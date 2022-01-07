from pyautogui import *
import pyautogui
import time
import keyboard
import random
import win32api, win32con

# I have a 32:9 Ultrawide monitor so these pixel values probably won't match up

tiles_y = '-730' # Can be standard across all tiles
tile1_x = 2820 
tile2_x = 2840
tile3_x = 2860
tile4_x = 2890

def click(x,y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
    time.sleep(0.05)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,0,0)

while keyboard.is_pressed('e') == False:
    if pyautogui.pixel(tile1_x, tiles_y)[2] == 113:
        pyautogui.press('q')
    elif pyautogui.pixel(tile2_x, tiles_y)[2] == 113:
        pyautogui.press('e')
    elif pyautogui.pixel(tile3_x, tiles_y)[2] == 113:
        pyautogui.press('o')
    elif pyautogui.pixel(tile4_x, tiles_y)[2] == 113:
        pyautogui.press('p')
    else:
        keyboard.press_and_release('e')