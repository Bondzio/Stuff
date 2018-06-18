import sys
import copy
import getopt

def is_float(value):
    '''
    checks if the given value is a float number or can be converted to a float number
    :param value: str
    :return: bool
    '''
    try:
        float(value)
        return True
    except ValueError:
        return False

def dieWithError(description, errorcode=1):
	print(description)
	exit(errorcode)

def calculateFuzzy(*fuzzy_num_list):
    for vector in input_vectors:
        for cluster in cluster_centers:
            # TODO irgendeine berrechnung der fuzzy Zahlen hier einfügen


def calculateErrorValue:
	for vector in input_vectors:
		for prototype in cluster_centers:
			#Addition aller Abstände mal fuzzyFaktoren
	
def getAbstand(vector1, vector2):
	abstand=0
	for index in range(len(vector1)):
		abstand+=(vector1[index]-vector2[index])**2
	return abstand**0.5


filename_data = "iris.txt"
cluster_num = 3
filename_output = "outfile.txt"
param_m = 1.5

#Read Parameters
try:
    opts,args= getopt.getopt(sys.argv[1:],"hfco",[])
except getopt.GetoptError:
    DieWithError("-f <filename> -c <prototype count> -m <fuzzifier m> -o <output_file>", 1)

for opt, arg in opts:
    if opt=='-h':
        print("fuzzycmeans.py -f <filename> -c <prototype count> -o <output_file>")
        print("-f  ... Filename of dataset [iris.txt]")
        print("-c ... Amount of Clusters to build [3]")
        print("-o ... Optional output file [outfile.txt]")
        sys.exit()
    elif opt =='-f':
        filename_data = str(arg)
    elif opt == '-c':
        cluster_num = int(arg)
    elif opt == '-o':
        filename_output = str(arg)
    elif opt == '-m':
        param_m = float(arg)
	else
		DieWithError("Unknown parameter "+opt,1)


input_vectors = []

# Read input
with open(filename_data, 'r') as fh:
    raw_data = fh.readlines()
    for line in raw_data:
        line_data = []
        parts = line.split(',')
        for part in parts:
            if is_float(part):
                line_data.append(float(part))
        input_vectors.append(line_data)

# Validate input
if len(input_vectors) is not 0:
    vector_len = len(input_vectors[0])
    if not all(len(vec) == vector_len for vec in input_vectors):
        dieWithError("Not all input lines have the same length",1) # Invalid input values, not all lines have the same vectorlength
else:
    dieWithError("No valid input lines. Please note this script only accepts ',' as a valid seperator!",1) # No valid input values
#Validate amount of Clusters vs amount of input data
if len(input_vectors) < cluster_num/2:
	dieWithError("You have less then twice the expected clusters as input, this will not work...", 1)

vector_fuzzynums = [] # Saves the fuzzynums for the input_vectors
cluster_centers = []

# "Randomly" choosing cluster centers for the first run
# Tries to reduce the iterations for sorted input vectors
for x in range(cluster_num):
    cluster_centers.append(copy.deepcopy(input_vectors[ int(len(input_vectors)/cluster_num * x) ]))

calculate_fuzzy() # KP muss irgendwie nochmal schauen, wie das mit call by value oder reference ist...
#Berrechnen der Fuzzywerte
#
#neuberrechnen der Clusterzentren, repeat...
#
#