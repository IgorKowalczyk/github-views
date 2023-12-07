![Github Profile Views](https://github.com/IgorKowalczyk/github-views/assets/49127376/1e3f22d5-5fbd-41ff-bd6f-4aee9dfae847)


<div align="center">
  <a aria-label="GitHub License" href="https://github.com/igorkowalczyk/github-views/blob/main/license.md">
    <img src="https://img.shields.io/github/license/igorkowalczyk/github-views?color=blue&logo=github&label=License">
  </a>
  <a aria-label="Version" href="https://github.com/igorkowalczyk/github-views/releases">
    <img src="https://img.shields.io/github/v/release/igorkowalczyk/github-views?color=blue&logo=github&label=Version">
  </a>
  <a aria-label="Powered by" href="https://deno.com/deploy">
    <img src="https://img.shields.io/static/v1?label=Powered%20by&message=Deno&color=blue&logo=deno">
  </a>
  <a aria-label="Powered by" href="https://astro.build">
    <img src="https://img.shields.io/static/v1?label=Powered%20by&message=Astro&color=blue&logo=astro&logoColor=fff">
  </a>
</div>

---

> [!NOTE]
> Don't forget to replace example `YOUR-USERNAME` parameter with real value.

## ✨ Basic usage
 - Go to https://github-views.deno.dev and enter your Github username or any other text
 - Copy the generated markdown code with the style you like and paste it in your `README.md` file
 
```markdown
![Github Views](https://github-views.deno.dev/api/badge/YOUR-USERNAME)
```

## 🖼️ Available styles

> [!NOTE]
> The default style is `flat`

| Style | Example | Usage |
| ----- | ---- | ---- |
| `flat` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true) | `style=flat` |
| `classic` | ![](https://github-views.deno.dev/api/badge/example?style=classic&display=true) | `style=classic` |

> [!NOTE]
> To apply the style, add to the URL `?style=YOUR-STYLE`, if you use other parameters you can use `&style=YOUR-STYLE`

## 🎨 Custom colors

> [!NOTE]
> The default color is `blue`

| Color | Example | Usage | Label Color | Label usage | 
| ----- | ---- | ---- | ---- |  ---- | 
| `blue` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=blue) | `color=blue`  | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=blue) | `labelColor=blue` |
| `cyan` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=cyan) | `color=cyan` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=cyan) | `labelColor=cyan` |
| `green` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=green) | `color=green` |  ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=green) | `labelColor=green` |
| `yellow` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=yellow) | `color=yellow` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=yellow) | `labelColor=yellow` |
| `orange` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=orange) | `color=orange` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=orange) | `labelColor=orange` |
| `red` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=red) | `color=red` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=red) | `labelColor=red` |
| `pink` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=pink) | `color=pink` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=pink) | `labelColor=pink` |
| `purple` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=purple) | `color=purple` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=purple) | `labelColor=purple` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=gray) | `labelColor=gray` |
| `gray` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=gray) | `color=gray` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=gray) | `labelColor=gray` |
| `black` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=black) | `color=black` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=black) | `labelColor=black` |
| `ff69b4` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&color=ff69b4) | `color=ff69b4` | ![](https://github-views.deno.dev/api/badge/example?style=flat&display=true&labelColor=ff69b4) | `labelColor=ff69b4` |

> [!NOTE]
> To apply the style, add to the URL `?color=YOUR-COLOR`, if you use other parameters you can use `&color=YOUR-COLOR`

> [!WARNING]
> HEX colors should be used without `#` symbol prefix.

## 📝 Custom text

You can overwrite default `Views` text with your own label.

![](https://github-views.deno.dev/api/badge/example?label=Your+own+label&display=true&color=blue)

> [!NOTE]
> Replace whitespace with `+` character in multi-word labels.

```markdown
![Github Views](https://github-views.deno.dev/api/badge/YOUR-USERNAME?label=Your+own+label)
```

## 📦 `JSON` format

You can get the number of views in `json` format. It can be useful if you want to use the number of views in your application.

> [!WARNING]
> The API is read-only, you can't change the number of views.

**Request:**
```
https://github-views.deno.dev/api/json/YOUR-USERNAME
```
> [!NOTE]
> Replace `YOUR-USERNAME` with your real value.

**Response:**
```json
{ "views": 123 }
```

---

## 🔩 Self Hosting

1. Clone [this repository](https://github.com/igorkowalczyk/github-views) `git clone https://github.com/IgorKowalczyk/github-views.git`
2. Run `pnpm i` to install all dependencies,
3. Run `npm run build` to build the project or `npm run dev` to run the project in development mode.
4. Run `pnpm run preview` to preview the project.

## 🖥️ Hosting with Deno Deploy

1. Fork this repository on GitHub
1. Go to https://deno.com/deploy and create an account
2. Click "New Project" and select your account and forked repository
3. Click "Add build step" and wait for the project to build
2. Go to repository settings -> [Secrets and variables -> Actions -> Variables](https://docs.github.com/en/actions/learn-github-actions/variables) and add `DENO_DEPLOY_PROJECT` variable with your [Deno Deploy](https://deno.com/deploy) project name.
4. Wait for the project to build and go to the project URL

> [!IMPORTANT]
> This project requires access to [Deno KV](https://deno.com/kv) which is currently in beta.

## 🖥️ Hosting with Vercel

Version `v3` does not support Vercel hosting. If you want to host this project on Vercel, use version [v2](https://github.com/IgorKowalczyk/github-views/tree/v2.2.1) and follow the instructions corresponding to the version.

## ⁉️ Issues

If you come across any errors or have suggestions for improvements, please create a [new issue here](https://github.com/igorkowalczyk/github-views/issues) and describe it clearly.


## 📥 Pull Requests

When submitting a pull request, please follow these steps:

- Clone [this repository](https://github.com/igorkowalczyk/github-views) `https://github.com/IgorKowalczyk/github-views.git`
- Create a branch from `main` and give it a meaningful name (e.g. `my-awesome-new-feature`).
- Open a [pull request](https://github.com/igorkowalczyk/github-views/pulls) on [GitHub](https://github.com/) and clearly describe the feature or fix you are proposing.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/github-views/blob/main/license.md) file for details
