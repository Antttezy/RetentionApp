import * as React from "react";

export function Retention({ retention, loading }) {
    if (loading)
        return null;
    else
        return (
            <p>Значение возвращаемости за {retention.days} дней = {retention.percentage * 100}%</p>
            );
}
