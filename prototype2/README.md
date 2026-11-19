# Boston National Board — editorial prototype 2

A second, independent responsive, static redesign of the Boston National Board Program website. Open `index.html` directly in a browser; no installation or build is required. Navigation, resource search, topic filters, and expandable role descriptions also work when opened locally.

## Preview locally

From this folder:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Present using GitHub Pages

Upload the **contents** of this folder to the root of a GitHub repository. In repository Settings → Pages, select deployment from the main branch and the root folder. All paths are relative, so the site also works under a repository subpath. If you upload the containing `prototype2` folder instead, open `/prototype2/` under the published repository URL.

No server, API keys, npm dependencies, or form backend are needed. Contact links open email and interest forms link to the existing Google Forms. Nothing is submitted automatically.

## Organization

- Certification: overview and information sessions.
- Candidate support: courses, cohorts, readers, and Maintenance of Certification.
- Resources: searchable library and benefits/reimbursement guidance.
- Our community: Boston NBCT network, events, and leadership opportunities.
- Teaching practice: core propositions, standards, ATLAS, and the supplied teaching framework.

The 15 pages share navigation, footer, typography, colors, spacing, button styles, and accessible focus states. The homepage and framework use images supplied in the original folder. The editorial wordmark is a prototype design, not an official BPS or BTU seal.

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

## Editorial design direction

Inspired by the supplied “Boston National Board editorial website.png”: deep purple, cream, cobalt blue, coral, and gold; expressive serif headlines; an arched hero photo; colored journey panels; and curved photo sections. This edition keeps the full 15-page content structure and 47-resource library from prototype 1.

The images are genuine program photos from the supplied Writing Retreats files. CSS crops and masks place them in the layout; the people and source images have not been AI-generated or altered. `assets/educators.jpg` is the original retreat collage and `assets/retreat-room.jpg` is the original wider retreat photograph.

“Get program updates” opens a pre-addressed email to the program inbox. The site does not claim to subscribe visitors or store their email. A real newsletter integration can be added later.

`preview.jpg` provides a screenshot of the finished homepage for discussion.
