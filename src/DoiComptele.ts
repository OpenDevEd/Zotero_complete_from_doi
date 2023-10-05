import Zotero from "zotero-lib";
import axios from "axios";
const zotero = new Zotero({ verbose: false });

interface kItems {
  [key: string]: string;
}

async function fetchZoteroItem(itemID: string, testMode: Boolean) {
  try {
    const result = await zotero.item({ key: itemID });
    console.log("\n\nget item data:", itemID);
    if (result == undefined) {
      console.log("itemID is undefined");
      return;
    }
    if (result["DOI"] == undefined) {
      console.log("DOI is undefined");
      return;
    }
    const doi = result["DOI"];
    const response = await axios.get(`https://api.crossref.org/works/${doi}`);
    console.log("get crossref data using DOI:", doi);
    if (response == undefined || response.data == undefined) {
      console.log("crossref response is undefined");
      return;
    }

    const inputJson = response.data.message;
    const k: kItems = {
      volume: "volume",
      issue: "issue",
      pages: "page",
      journalAbbreviation: "short-container-title",
      publicationTitle: "container-title",
      url: "URL",
    };

    const updateJson: kItems = {};

    for (const key in k) {
      let res = undefined;
      if (k.hasOwnProperty(key) && inputJson.hasOwnProperty(k[key])) {
        if (Array.isArray(inputJson[k[key]])) {
          if (inputJson[k[key]].length > 0) res = inputJson[k[key]][0];
        } else res = inputJson[k[key]];
      }
      if (res != undefined) {
        if (result[key] != res) updateJson[key] = res;
      }
    }
    console.log("data to update:", updateJson);
    if (testMode) return;
    if (Object.keys(updateJson).length > 0) {
      const res = await zotero.update_item({ key: itemID, json: updateJson });
      console.log(itemID, "updated successfully");
    } else {
      console.log("nothing to update");
    }
  } catch (error) {
    console.error("Error fetching Zotero item:", error);
  }
}

type CommanderOptions = string[];

async function DoiComplete(values: CommanderOptions, options: any) {
  const testMode: Boolean = options.test;

  for (const itemId of values) {
    await fetchZoteroItem(itemId, testMode);
  }
}

export { DoiComplete, CommanderOptions };
