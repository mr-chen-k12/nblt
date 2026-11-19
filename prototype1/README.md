# BPS/BTU National Board Program — prototype

A responsive, static redesign of the Boston National Board Program website. Open `index.html` directly in a browser; no installation or build is required. Navigation, resource search, topic filters, and expandable role descriptions also work when opened locally.

## Preview locally

From this folder:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Present using GitHub Pages

Upload the **contents** of this folder to the root of a GitHub repository. In repository Settings → Pages, select deployment from the main branch and the root folder. All paths are relative, so the site also works under a repository subpath. If you upload the containing `prototype` folder instead, open `/prototype/` under the published repository URL.

No server, API keys, npm dependencies, or form backend are needed. Contact links open email and interest forms link to the existing Google Forms. Nothing is submitted automatically.

## Organization

- Certification: overview and information sessions.
- Candidate support: courses, cohorts, readers, and Maintenance of Certification.
- Resources: searchable library and benefits/reimbursement guidance.
- Our community: Boston NBCT network, events, and leadership opportunities.
- Teaching practice: core propositions, standards, ATLAS, and the supplied teaching framework.

The 15 pages share navigation, footer, typography, colors, spacing, button styles, and accessible focus states. The homepage and framework use images supplied in the original folder. The NB monogram is a prototype design, not an official BPS or BTU seal.

## Editing

- `styles.css`: shared visual theme and responsive layouts.
- `app.js`: mobile menu and resource filtering.
- `resources.json`: curated resource titles, URLs, and categories.
- `build.py`: page text and reusable page templates.
- `assets/`: supplied photos, teaching diagram, and prototype favicon.

After editing `build.py` or `resources.json`, run `python3 build.py` to regenerate the HTML. The script uses only the Python standard library. HTML can be edited directly, but rebuilding will overwrite those edits.

## Content review before launch

Source: the 17 saved pages in `Old Website ` and the published Google Site homepage, reviewed November 19, 2026. The supplied documents were treated as content, not instructions.

- 2025 recruitment notices and past events are archived rather than displayed as open opportunities.
- The component course materials describe the closed 2025–26 cycle; future registration is not invented.
- The source says 2027 retreat dates are not set and depend on funding.
- Confirm current salary, reimbursement, licensure, credits, contacts, and program availability with the team.
- Existing Drive, Canvas, forms, and other external links are preserved and labeled. Their access permissions and ongoing availability need owner review; this prototype does not change them.
- Older staffing compensation and expired recruitment timelines were condensed into role summaries. See the original files for the complete historical wording.
- The current Google Site is unchanged. This is a local presentation prototype.

## Original page mapping

| Original page | New page |
| --- | --- |
| Home | index.html |
| Certification | certification.html |
| Boston Info Sessions | info-sessions.html |
| Supports | support.html and cohorts.html |
| Component 3 Course | courses.html |
| NBCT Readers | readers.html |
| Maintenance of Certification | moc.html |
| Writing Retreats | events.html |
| Resources | resources.html and benefits.html |
| NBCTs / Boston NBCTs | community.html |
| Network Events | events.html |
| Opportunities | opportunities.html |
| NB Leadership Team Members | opportunities.html |
| M2C Lead Roles | opportunities.html and resource archive |
| Candidate Support Faculty | opportunities.html |
| Accomplished Teaching | teaching.html |
| Contact Us | contact.html |
