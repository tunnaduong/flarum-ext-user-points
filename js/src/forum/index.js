import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import Page from "flarum/common/components/Page";
import UserCard from "flarum/forum/components/UserCard";

app.initializers.add("tunna-user-points", () => {
  // Đăng ký route mới: /ranking
  app.routes.ranking = {
    path: "/ranking",
    component: RankingPage,
  };

  // Thêm link vào menu
  extend(app.navigation, "items", (items) => {
    items.add("ranking", {
      title: "Xếp hạng",
      href: app.route("ranking"),
      icon: "fas fa-trophy",
    });
  });
});

// Component trang xếp hạng
const RankingPage = {
  view() {
    return (
      <div className="RankingPage">
        <h2>🎖 Xếp hạng thành viên</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {app.store
            .all("users")
            .filter((user) => typeof user.points === "function") // tránh lỗi undefined
            .sort((a, b) => b.points() - a.points())
            .map((user) => (
              <li
                style={{
                  marginBottom: "1em",
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "1em",
                }}
              >
                <UserCard user={user} />
                <span style={{ float: "right", fontWeight: "bold" }}>
                  {user.data.attributes.points ?? 0} điểm
                </span>
              </li>
            ))}
        </ul>
      </div>
    );
  },
};
