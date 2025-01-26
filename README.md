# RideDB

RideDB is a project that aggregates and organizes GBFS (General Bikeshare Feed Specification) data from various operators around the world. The data is structured by country and city, with city names normalized for easy access.

## Accessing Operator Data

To access the list of operators for a specific city, use the following URL structure:

```plaintext
https://simon-cad.github.io/RideDB/data/country_code/city/operators.json
```

Replace `country_code` and `city` with the appropriate normalized names. For example, to access operator data for Paris, France, you would use:

```plaintext
https://simon-cad.github.io/RideDB/data/fr/paris/operators.json
```

## Normalization of City Names

City names are normalized to ensure consistency and easy access. The normalization process involves:

- Replacing spaces with underscores (`_`).
- Replacing hyphens with underscores (`_`).
- Converting the entire name to lowercase.

For example:
- "New York" becomes `new_york`.
- "San Francisco" becomes `san_francisco`.

## Data Structure

The data is organized in a hierarchical directory structure:

```plaintext
data/
  ├── country/
  │   ├── city/
  │   │   ├── operators.json
  │   │   └── ...
  │   └── ...
  └── ...
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your fork.
5. Create a pull request to the main repository.
## Acknowledgments

- Thanks to the [MobilityData](https://github.com/MobilityData/gbfs) project for providing the GBFS data.
