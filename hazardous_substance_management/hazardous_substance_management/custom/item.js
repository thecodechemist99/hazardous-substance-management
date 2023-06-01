// Copyright (c) 2023, Florian Beck and contributors
// For license information, please see license.txt

frappe.ui.form.on("Item", {
	refresh(frm) {
    const doc = frm.doc;
		renderPreview(doc);
	}
});

frappe.ui.form.on("GHS Pictogram List", {
  ghs_pictogram_add(frm, cdt, cdn) {
    const doc = frm.doc;
		renderPreview(doc);
  },
  ghs_pictogram_remove(frm, cdt, cdn) {
    const doc = frm.doc;
		renderPreview(doc);
  }
});

function renderPreview(doc) {
  const div = document.querySelector(`[data-fieldname="pictogram_preview"]`);
  div.cssText = "display: flex;";
  div.innerHTML = "";
    
  for (let row of doc.ghs_pictograms) {
    frappe.db.get_value("GHS Pictogram", row.ghs_pictogram, "img")
      .then((res) => {
        div.innerHTML += `<img style="max-height: 96px; margin-bottom: 15px" alt="${row.ghs_pictogram}" src="${res.message.img}" />\n`;
      })
      .catch((err) => {
        console.error(`Error fetching image from database: ${err}`);
      });
  }
}