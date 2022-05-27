"""
Helper script, to validate the massive tree taxomy data CSV
"""
FILE_PATH = "src/assets/tree_tax.json"
NUM_COLUMNS = 6


def main():
    # read the tree taxonmy data file
    lines = open(FILE_PATH, "r").readlines()[2:-1]

    print("\n\nValidating each line has the right number of commas...")
    lines[-1] += ","
    for line in lines:
        if line.count(",") != NUM_COLUMNS:
            print(line.strip())
            exit(1)

    print("Validating the taxonmy is complete...")
    for line in lines:
        bits = line.strip().split(",")
        assert len(bits[0].strip()), line
        assert len(bits[1].strip()), line
        assert len(bits[2].strip()), line
        assert len(bits[3].strip()), line

    print("Validating the taxonomic capitalization...")
    for line in lines:
        bits = line.strip().split(",")
        assert bits[0][0].upper() == bits[0][0], line
        assert bits[1][0].upper() == bits[1][0], line
        assert bits[2][0].upper() == bits[2][0], line
        assert bits[3][0].lower() == bits[3][0], line

    print("Validating that there are no duplicates...")
    all_gs = set()
    for line in lines:
        bits = line.strip().split(",")
        gs = (bits[2], bits[3])
        assert gs not in all_gs, line
        all_gs.add(gs)

    print("Validating that there are no sub-species...")
    for line in lines:
        bits = line.strip().split(",")
        assert " " not in bits[3].strip(), line

    print("\n...Valid!\n\n")


if __name__ == "__main__":
    main()
