# Packing progress belongs to the Trip list, not the List

A List is a reusable definition (items and wanted quantities). Owned, prepared and packed counts live in `trip_list_item_progress`, attached to the Trip list (the List assigned to a Trip), so the same List used on two Trips has independent progress. `wanted` is a target, not a ceiling: lowering it never clamps progress, and the UI shows a surplus warning instead. The only enforced invariant is `packed ≤ prepared ≤ owned`.
