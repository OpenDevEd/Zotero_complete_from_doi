# Zotero Complete From DOI

Zotero Complete From DOI is a tool that allows you to add journal articles to your Zotero collection using their Digital Object Identifier (DOI). It retrieves data from Crossref using the DOI and updates the corresponding item in your Zotero collection with the retrieved information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)

## Installation

To get started with DOI to Zotero Data Sync, follow these installation steps:

1. Clone this repository to your local machine:

   ``````
   git clone https://github.com/OpenDevEd/Zotero_complete_from_doi
   ``````

2. Navigate to the project directory:

   ``````
   cd Zotero_complete_from_doi
   ``````

3. Install the project dependencies using npm:

   ``````
   npm install
   ``````

## Usage

DOI to Zotero Data Sync is easy to use. Simply provide the DOIs of the journal articles you want to add or update in your Zotero collection using the following command:

`````` 
npm start -- <DOI1> <DOI2> ... <DOIn>
`````` 

You can also use the `--test` option to run the tool in test mode without making actual updates to your Zotero collection.

Here's an example of how to use the tool with test mode:

`````` 
npm start -- <DOI1> <DOI2> ... <DOIn> --test
`````` 

And without test mode:

`````` 
npm start -- <DOI1> <DOI2> ... <DOIn>
`````` 

## Commands

### `npm start -- <DOI1> <DOI2> ... <DOIn>`

This command allows you to add or update journal articles in your Zotero collection using their DOIs. Replace `<DOI1>`, `<DOI2>`, etc., with the DOIs of the articles you want to sync.

Options:

- `--test`: Run the tool in test mode without making updates to your Zotero collection.

### `npm install`

This command installs the project dependencies.

