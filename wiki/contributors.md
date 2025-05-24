---
title: "Contributors"
date: "2025-01-01"
summary: "List of Typo's contributors"
description: "List of Typo's contributors"
toc: false
readTime: false
autonumber: false
math: false
showTags: false
hidePagination: true
hideBackToTop: true
---

<div id="loading-message">fetching GitHub data, hang tight!</div>

<div id="content" style="display: none;">
  Typo is currently on release <a href="https://github.com/tomfran/typo/releases/latest"><span id="release-number">...</span></a>, 
  with <span id="star-count">over 300</span> stars, and 
  <span id="contributors-count">over 20</span> contributors:

  <div id="contributors-list" style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 1.5rem;"></div>
</div>

<script>
  async function fetchGitHubData() {
    const cacheKey = "githubData";
    const cacheExpiryKey = "githubDataExpiry";
    const cacheExpiryTime = 3600 * 1000;

    const cachedData = localStorage.getItem(cacheKey);
    const cachedExpiry = localStorage.getItem(cacheExpiryKey);
    const now = new Date().getTime();

    if (cachedData && cachedExpiry && now < cachedExpiry) {
      const { starCount, contributors, latestRelease } = JSON.parse(cachedData);
      updateUI(starCount, contributors, latestRelease);
      return;
    }

    try {
      const [repoRes, releaseRes, contributorsRes] = await Promise.all([
        fetch("https://api.github.com/repos/tomfran/typo"),
        fetch("https://api.github.com/repos/tomfran/typo/releases/latest"),
        fetch("https://api.github.com/repos/tomfran/typo/contributors")
      ]);

      const [repoData, releaseData, contributors] = await Promise.all([
        repoRes.json(),
        releaseRes.json(),
        contributorsRes.json()
      ]);

      const starCount = repoData.stargazers_count;
      const latestRelease = releaseData.name;

      localStorage.setItem(cacheKey, JSON.stringify({ starCount, contributors, latestRelease }));
      localStorage.setItem(cacheExpiryKey, now + cacheExpiryTime);

      updateUI(starCount, contributors, latestRelease);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      document.getElementById("star-count").textContent = "Failed to fetch star count.";
      document.getElementById("contributors-count").textContent = "Failed to fetch contributors.";
      document.getElementById("release-number").textContent = "Failed to fetch release.";
    }
  }

  function updateUI(starCount, contributors, latestRelease) {
    document.getElementById("loading-message").style.display = "none";
    document.getElementById("content").style.display = "block";

    document.getElementById("release-number").textContent = latestRelease;
    document.getElementById("star-count").textContent = `${starCount}`;
    document.getElementById("contributors-count").textContent = `${contributors.length}`;

    const contributorsList = document.getElementById("contributors-list");
    contributorsList.innerHTML = "";

    contributors.forEach(contributor => {
      const contributorItem = document.createElement("a");
      contributorItem.href = contributor.html_url;
      contributorItem.title = contributor.login;
      contributorItem.style.display = "inline-block";

      contributorItem.innerHTML = `
        <img src="${contributor.avatar_url}" alt="${contributor.login}" width="45" height="45" style="border-radius: 50%;">
      `;

      contributorsList.appendChild(contributorItem);
    });
  }

  fetchGitHubData();
</script>
