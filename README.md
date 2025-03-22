![Github Profile Views](https://github.com/IgorKowalczyk/github-views/assets/49127376/1e3f22d5-5fbd-41ff-bd6f-4aee9dfae847)


<div align="center">
  <a aria-label="GitHub License" href="https://github.com/igorkowalczyk/github-views/blob/main/license.md">
    <img src="https://img.shields.io/github/license/igorkowalczyk/github-views?color=blue&logo=github&label=License">
  </a>
  <a aria-label="Version" href="https://github.com/igorkowalczyk/github-views/releases">
    <img src="https://img.shields.io/github/v/release/igorkowalczyk/github-views?color=blue&logo=github&label=Version">
  </a>
  <a aria-label="Powered by" href="https://workers.cloudflare.com/">
    <img src="https://img.shields.io/static/v1?label=Powered%20by&message=Cloudflare+Workers&color=blue&logo=cloudflareworkers">
  </a>
  <a aria-label="Powered by" href="https://astro.build">
    <img src="https://img.shields.io/static/v1?label=Powered%20by&message=Astro&color=blue&logo=astro&logoColor=fff">
  </a>
</div>

---

> [!NOTE]
> Don't forget to replace example `YOUR-USERNAME` parameter with real value.

## ✨ Basic usage
 - Go to https://views.igorkowalczyk.dev and enter your Github username or any other text
 - Copy the generated markdown code with the style you like and paste it in your `README.md` file
 
```markdown
![Github Views](https://views.igorkowalczyk.dev/api/badge/YOUR-USERNAME)
```

## 🖼️ Available styles

> [!NOTE]
> The default style is `flat`

| Style | Example | Usage |
| ----- | ---- | ---- |
| `flat` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true) | `style=flat` |
| `classic` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=classic&display=true) | `style=classic` |

> [!NOTE]
> To apply the style, add to the URL `?style=YOUR-STYLE`, if you use other parameters you can use `&style=YOUR-STYLE`

## 🎨 Custom colors

> [!NOTE]
> The default color is `blue`

| Color | Example | Usage | Label Color | Label usage | 
| ----- | ---- | ---- | ---- |  ---- | 
| `blue` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=blue) | `color=blue`  | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=blue) | `labelColor=blue` |
| `cyan` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=cyan) | `color=cyan` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=cyan) | `labelColor=cyan` |
| `green` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=green) | `color=green` |  ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=green) | `labelColor=green` |
| `yellow` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=yellow) | `color=yellow` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=yellow) | `labelColor=yellow` |
| `orange` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=orange) | `color=orange` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=orange) | `labelColor=orange` |
| `red` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=red) | `color=red` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=red) | `labelColor=red` |
| `pink` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=pink) | `color=pink` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=pink) | `labelColor=pink` |
| `purple` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=purple) | `color=purple` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=purple) | `labelColor=purple` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=gray) | `labelColor=gray` |
| `gray` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=gray) | `color=gray` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=gray) | `labelColor=gray` |
| `black` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=black) | `color=black` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=black) | `labelColor=black` |
| `ff69b4` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&color=ff69b4) | `color=ff69b4` | ![](https://views.igorkowalczyk.dev/api/badge/example?style=flat&display=true&labelColor=ff69b4) | `labelColor=ff69b4` |

> [!NOTE]
> To apply the style, add to the URL `?color=YOUR-COLOR`, if you use other parameters you can use `&color=YOUR-COLOR`

> [!WARNING]
> HEX colors should be used without `#` symbol prefix.


## 📊 Number format

You can display the number of views in a more readable format. You can choose between `short` and `long` format.

| Format | Example | Usage |
| ----- | ---- | ---- |
| `short` | ![](https://views.igorkowalczyk.dev/api/badge/igorkowalczyk?style=flat&display=true&format=short) | `format=short` |
| `long` | ![](https://views.igorkowalczyk.dev/api/badge/igorkowalczyk?style=flat&display=true&format=long) | `format=long` |

> [!NOTE]
> To apply the style, add to the URL `?format=YOUR-FORMAT`, if you use other parameters you can use `&format=YOUR-FORMAT`

## 📝 Custom text

You can overwrite default `Views` text with your own label.

![](https://views.igorkowalczyk.dev/api/badge/example?label=Your+own+label&display=true&color=blue)

```markdown
![Github Views](https://views.igorkowalczyk.dev/api/badge/YOUR-USERNAME?label=Your+own+label)
```

> [!NOTE]
> Replace whitespace with `+` character in multi-word labels.

## 📦 `JSON` format

You can get the number of views in `json` format. It can be useful if you want to use the number of views in your application.

> [!WARNING]
> The API is read-only, you can't change the number of views.

**Request:**
```
https://views.igorkowalczyk.dev/api/json/YOUR-USERNAME
```
> [!NOTE]
> Replace `YOUR-USERNAME` with your real value.

**Response:**
```json
{ "views": 123 }
```

---

## 🔩 Local Development

1. Clone [this repository](https://github.com/igorkowalczyk/github-views) `git clone https://github.com/IgorKowalczyk/github-views.git`
2. Run `pnpm i` to install all dependencies,
3. Edit the `wrangler.jsonc` file with your values
4. Run `pnpm types` to generate types for the project
5. Run `pnpm dev` to start the development server or `pnpm preview` to preview the production build


## 🖥️ Hosting with Cloudflare Workers

1. Clone [this repository](https://github.com/igorkowalczyk/github-views) `git clone https://github.com/IgorKowalczyk/github-views.git`
2. Run `pnpm i` to install all dependencies,
2. Go to [Cloudflare Workers](https://workers.cloudflare.com/) and create a new project (you can import the project from GitHub)
3. Go to Cloudflare > Storage & Databases -> KV -> Create, and create a new KV namespace
3. Link the KV namespace to the project in the `wrangler.jsonc` file
4. Edit the `wrangler.jsonc` file with your values
4. Run `pnpm types` to generate types for the project
5. Run `pnpm dev` to start the development server or `pnpm preview` to preview the production build
5. If you want to deploy the project, run `pnpm check` to check the project and `pnpm deploy` to deploy the project to Cloudflare Workers

> [!NOTE]
> Refer to the [Cloudflare Workers documentation](https://developers.cloudflare.com/workers) and [Wrangler documentation](https://developers.cloudflare.com/workers/tooling/wrangler) for more information.

## ⁉️ Issues

If you come across any errors or have suggestions for improvements, please create a [new issue here](https://github.com/igorkowalczyk/github-views/issues) and describe it clearly.

## 📥 Pull Requests

When submitting a pull request, please follow these steps:

- Clone [this repository](https://github.com/igorkowalczyk/github-views) `https://github.com/IgorKowalczyk/github-views.git`
- Create a branch from `main` and give it a meaningful name (e.g. `my-awesome-new-feature`).
- Open a [pull request](https://github.com/igorkowalczyk/github-views/pulls) on [GitHub](https://github.com/) and clearly describe the feature or fix you are proposing.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/github-views/blob/main/license.md) file for details
