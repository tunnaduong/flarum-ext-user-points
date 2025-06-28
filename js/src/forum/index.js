import { extend, Page } from "flarum/common/extend";
import app from "flarum/forum/app";
import Page from "flarum/common/components/Page";
import Link from "flarum/common/components/Link";
import UserCard from "flarum/forum/components/UserCard";

app.initializers.add("tunna-user-points", () => {
  app.routes.ranking = {
    path: "/ranking",
    component: {
      view() {
        return (
          <div className="RankingPage">
            <h2>🎖 Xếp hạng thành viên</h2>
            <ul>
              {app.store
                .all("users")
                .sort((a, b) => b.points() - a.points())
                .map((user) => (
                  <li>
                    <UserCard user={user} />
                    <span style="float:right;">
                      {user.data.attributes.points} điểm
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        );
      },
    },
  };

  extend(app.navigation, "items", (items) => {
    items.add("ranking", {
      title: "Xếp hạng",
      href: app.route("ranking"),
      icon: "fas fa-trophy",
    });
  });
});
