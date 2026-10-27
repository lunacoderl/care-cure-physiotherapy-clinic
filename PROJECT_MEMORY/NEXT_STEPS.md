# Next Steps

## Client Image Ingestion
1. Client will provide real clinic photos (exterior, reception, doctor portrait, treatment rooms, equipment).
2. Save client photos directly into `/public/images/` and update references in `content/site.ts` and `components/home/GalleryGrid.tsx`.
3. Verify doctor's medical registration number with client (currently stubbed as APPTC/REG/CONFIRM in `content/site.ts`).

## Production Deployment & Google Search Console
1. Connect git repository to Vercel.
2. Set environment variables (if any needed, e.g., Google Analytics ID: `NEXT_PUBLIC_GA_ID`).
3. Point custom domain (`careandcurephysio.in` or client domain) in DNS settings.
4. Submit `/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
5. Align Google Business Profile with website URL and services.
