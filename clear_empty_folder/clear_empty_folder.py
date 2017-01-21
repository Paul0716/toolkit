# -*- coding: utf-8 -*-
import sys
import os
from send2trash import send2trash

empty = []

def main(arg):
	if arg == empty:
		current_dir = os.getcwd()
		for dirPath, dirNames, fileNames in os.walk(current_dir):
			for d in dirNames:
				file = os.path.join(dirPath,d)
				if os.listdir(file) == empty:
					send2trash(file)
	else:
		path = arg[0]
		for dirPath, dirNames, fileNames in os.walk(path):
			for d in dirNames:
				file = os.path.join(dirPath,d)
				if os.listdir(file) == empty:
					send2trash(file)
					# os.rename(os.path.join(dirPath, d), os.path.join("~/.Trash/",d))
					print "%s folder has been moved to trash. " % os.path.join(dirPath, d)

class file_operation:

	def __init(dir):
		self.path = dir
			

	def __str__(self):
		return self.path


if __name__ == "__main__":
	main(sys.argv[1:])