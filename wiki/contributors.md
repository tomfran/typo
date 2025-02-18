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
hideBackToTop: false
---

The theme has accumulated <span id="star-count">over 300</span> stars on Github, and 
currently counts <span id="contributors-count">over 20</span> contributors:

<ul id="contributors-list" style="list-style-type: none; padding: 0; margin-top: 2rem"></ul>

<script>
  async function fetchGitHubData() {
    const cacheKey = "githubData";
    const cacheExpiryKey = "githubDataExpiry";
    const cacheExpiryTime = 3600 * 1000; // 1 hour in milliseconds

    // Check if cached data exists and is still valid
    const cachedData = localStorage.getItem(cacheKey);
    const cachedExpiry = localStorage.getItem(cacheExpiryKey);
    const now = new Date().getTime();

    if (cachedData && cachedExpiry && now < cachedExpiry) {
      const { starCount, contributors } = JSON.parse(cachedData);
      updateUI(starCount, contributors);
      return;
    }

    try {
      // Fetch star count
      const repoResponse = await fetch("https://api.github.com/repos/tomfran/typo");
      const repoData = await repoResponse.json();
      const starCount = repoData.stargazers_count;

      // Fetch contributors
      const contributorsResponse = await fetch("https://api.github.com/repos/tomfran/typo/contributors");
      const contributors = await contributorsResponse.json();

      // Cache data
      localStorage.setItem(cacheKey, JSON.stringify({ starCount, contributors }));
      localStorage.setItem(cacheExpiryKey, now + cacheExpiryTime);

      updateUI(starCount, contributors);

    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      document.getElementById("star-count").textContent = "Failed to fetch star count.";
      document.getElementById("contributors-count").textContent = "Failed to fetch contributors count.";
    }
  }

  function updateUI(starCount, contributors) {
    document.getElementById("star-count").textContent = `${starCount}`;
    document.getElementById("contributors-count").textContent = `${contributors.length}`;

    const contributorsList = document.getElementById("contributors-list");
    contributorsList.innerHTML = "";

    contributors.forEach(contributor => {
      const listItem = document.createElement("li");
      listItem.style.marginBottom = ".5rem";
      listItem.innerHTML = `
        <span style="display: flex; align-items: bottom;">
          <img src="${contributor.avatar_url}" alt="${contributor.login}" width="30" height="30" style="margin-right: 10px; border-radius: 50%;">
          <a href="${contributor.html_url}">${contributor.login}</a>&nbsp;- ${contributor.contributions}
        </span>
      `;
      contributorsList.appendChild(listItem);
    });
  }

  fetchGitHubData();
</script>
