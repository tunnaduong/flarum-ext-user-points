# 🎖️ Flarum Extension: User Ranking System

A simple point-based ranking system for [Flarum](https://flarum.org), inspired by [fof/gamification](https://github.com/FriendsOfFlarum/gamification).

Users earn points based on their activity:

- 📝 +10 points for starting a new discussion
- 💬 +2 points for posting a comment
- 👍 +5 points whenever their post gets an upvote (requires [fof/vote](https://github.com/FriendsOfFlarum/vote))

View the rankings at `/ranking`.

---

## 📦 Installation

> **Requires:** Flarum v1.0+ and [fof/vote](https://github.com/FriendsOfFlarum/vote)

Run this in your Flarum root directory:

```bash
composer require tunnaduong/flarum-ext-user-points:*
php flarum migrate
php flarum cache:clear
```
