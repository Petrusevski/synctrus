import express from "express";
import { supabase } from "../lib/supabaseClient.js";
const router = express.Router();

// Earn points
router.post("/earn", async (req, res) => {
  const { brand_id, member_id, amount, description } = req.body;

  // fetch rule & tier multiplier
  const { data: member } = await supabase
    .from("members")
    .select("tier, points")
    .eq("id", member_id)
    .single();

  const { data: tier } = await supabase
    .from("tiers")
    .select("multiplier")
    .eq("brand_id", brand_id)
    .eq("name", member.tier)
    .single();

  const earned = Math.floor(amount * tier.multiplier);
  await supabase.from("transactions").insert({
    brand_id,
    member_id,
    type: "earn",
    points: earned,
    description,
  });

  await supabase
    .from("members")
    .update({ points: member.points + earned })
    .eq("id", member_id);

  res.json({ earned });
});
