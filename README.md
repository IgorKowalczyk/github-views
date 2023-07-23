<img width="170" height="170" align="left" style="float: left; margin: 0 10px 0 0; border-radius: 50%;" src="https://views.igorkowalczyk.vercel.app/favicons/android-chrome-144x144.png">

## Github Profile Views

> 👀 Count the views of your github profile with your own custom badge

[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/github-views?color=%2334D058&logo=github&style=flat-square&label=License)](https://github.com/igorkowalczyk/github-views/blob/main/license.md)
[![Version](https://img.shields.io/github/v/release/igorkowalczyk/github-views?color=%2334D058&logo=github&style=flat-square&label=Version)](https://github.com/igorkowalczyk/github-views/releases)
[![Discord](https://img.shields.io/discord/666599184844980224?color=%2334D058&logo=discord&style=flat-square&logoColor=fff&label=Discord)](https://igorkowalczyk.dev/discord)
<br><br><br>

---

> **Note**:
> Don't forget to replace example `YOUR-USERNAME` parameter with real value.

## ✨ Basic usage
 - Go to https://views.igorkowalczyk.vercel.app and enter your Github username or any other text
 - Copy the generated markdown code with the style you like and paste it in your `README.md` file
 
```markdown
![](https://views.igorkowalczyk.vercel.app/api/badge/YOUR-USERNAME)
```

## 🖼️ Available styles

> **Note**:
> The default style is `flat`

| Style | Example | Usage |
| ----- | ---- | ---- |
| `flat` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true) | `style=flat` |
| `classic` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=classic&display=true) | `style=classic` |

> **Note**:
> To apply the style, add to the URL `?style=YOUR-STYLE`, if you use other parameters you can use `&style=YOUR-STYLE`

## 🎨 Custom colors

> **Note**:
> The default color is `blue`

| Color | Example | Usage | Label Color | Label usage | 
| ----- | ---- | ---- | ---- |  ---- | 
| `blue` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=blue) | `color=blue`  | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=blue) | `labelColor=blue` |
| `cyan` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=cyan) | `color=cyan` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=cyan) | `labelColor=cyan` |
| `green` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=green) | `color=green` |  ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=green) | `labelColor=green` |
| `yellow` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=yellow) | `color=yellow` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=yellow) | `labelColor=yellow` |
| `orange` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=orange) | `color=orange` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=orange) | `labelColor=orange` |
| `red` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=red) | `color=red` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=red) | `labelColor=red` |
| `pink` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=pink) | `color=pink` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=pink) | `labelColor=pink` |
| `purple` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=purple) | `color=purple` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=purple) | `labelColor=purple` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=gray) | `labelColor=gray` |
| `gray` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=gray) | `color=gray` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=lightgrey) | `labelColor=gray` |
| `black` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=black) | `color=black` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=black) | `labelColor=black` |
| `ff69b4` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&color=ff69b4) | `color=ff69b4` | ![](https://views.igorkowalczyk.vercel.app/api/badge/example?style=flat&display=true&labelColor=ff69b4) | `labelColor=ff69b4` |

> **Note**:
> To apply the style, add to the URL `?color=YOUR-COLOR`, if you use other parameters you can use `&color=YOUR-COLOR`

> **Warning**:
> HEX colors should be used without `#` symbol prefix.

## 📝 Custom text

You can overwrite default `Views` text with your own label.

![](https://views.igorkowalczyk.vercel.app/api/badge/example?label=Your+own+label&display=true&color=blue)

> **Note**:
> Replace whitespace with `+` character in multi-word labels.

```markdown
![](https://views.igorkowalczyk.vercel.app/api/badge/YOUR-USERNAME?label=Your+own+label)
```

## 📦 `JSON` format

You can get the number of views in `json` format. It can be useful if you want to use the number of views in your application.

> **Warning**:
> The API is read-only, you can't change the number of views.

**Request:**
```
https://views.igorkowalczyk.vercel.app/api/json/YOUR-USERNAME
```
> **Note**:
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

1. Go to https://deno.com/deploy and create an account
2. Click "New Project" and select repository from Github
3. Select the repository with this project
4. Click "Deploy" and wait for the project to build

> **Note**:
> This project requires private access to [Deno KV](https://deno.com/kv).

## 🖥️ Hosting with Vercel

Version `v3` does not support Vercel hosting. If you want to host this project on Vercel, use version [v2](https://github.com/IgorKowalczyk/github-views/releases/tag/v2.2.1) and follow the instructions corresponding to the version.

## ⁉️ Issues

If you come across any errors or have suggestions for improvements, please create a [new issue here](https://github.com/igorkowalczyk/github-views/issues) and describe it clearly.


## 📥 Pull Requests

When submitting a pull request, please follow these steps:

- Clone [this repository](https://github.com/igorkowalczyk/github-views) `https://github.com/IgorKowalczyk/github-views.git`
- Create a branch from `main` and give it a meaningful name (e.g. `my-awesome-new-feature`).
- Open a [pull request](https://github.com/igorkowalczyk/github-views/pulls) on [GitHub](https://github.com/) and clearly describe the feature or fix you are proposing.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/github-views/blob/main/license.md) file for details
