# Friis RF Link & Interference Calculator

A browser-based RF link-budget and interference-screening tool using the Friis free-space model. The web calculator is based on **workbook Version 3** and includes distance sweeps, selectable Tx/Rx antenna-gain sweeps, editable placement comparisons, sensitivity and interference margins, and portable scenario files.

**Live calculator:** [iliketolie.github.io/friis-rf-calculator](https://iliketolie.github.io/friis-rf-calculator/)

## Web calculator features

- Main link-budget calculator with FSPL, wavelength, received power, total losses, link margin, interference-threshold margin, and screening status.
- Distance sweep with received-power, sensitivity, and interference-threshold curves.
- Antenna-gain sweep with a Tx/Rx selector and three editable comparison distances.
- Ten-row placement comparison with editable gains, distances, losses, rankings, and statuses.
- Automatic device-local saving plus JSON scenario import/export.
- Responsive layout for desktop, tablet, and mobile browsers.
- Automated tests against known Version 3 workbook results.

The web version intentionally does **not** include the Version 4 antenna-pattern and off-axis-gain model.

## Run locally

Prerequisites: Node.js 22 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

To verify and build the production site:

```bash
pnpm test
pnpm build
```

## Deployment

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`. It tests the RF calculation engine, builds the static site, and deploys the `dist` output to GitHub Pages.

## Workbook releases

The repository retains the four Excel releases and [VERSION_HISTORY.txt](VERSION_HISTORY.txt). The source used for the web implementation is [Friis_RF_Link_and_Interference_Calculator_v3.xlsx](Friis_RF_Link_and_Interference_Calculator_v3.xlsx).

## Engineering scope

This calculator is for preliminary engineering analysis. Friis assumes free-space propagation and antenna gains in the direction of the other antenna. It does not replace detailed propagation modelling, antenna-pattern analysis, coordination studies, or field measurements. A threshold exceedance is a screening flag, not proof of harmful interference.
