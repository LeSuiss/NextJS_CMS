import { Box, Button, Card, Container, Stack, Typography } from '@mui/material'

import type { GetStaticProps } from 'next'
import Layout from '../components/layout'
import Link from 'next/link'
import React from 'react'
import { i18n } from '@lingui/core'
import loadTranslation from '../assets/utils/loadTranslation'
import { t } from '@lingui/macro'
import { useIsMobile } from '../assets/utils/hooks'

export default function Legal() {
  const layoutPadding = !useIsMobile ? 8 : 3

  return (
    <Layout
      title={i18n._(/* i18n: Mentions Légales */ t`Cette page n'existe pas`)}
    >
      <Stack
        padding={layoutPadding}
        sx={{ backgroundImage: 'url("/404.jpeg")' }}
      >
        <Container maxWidth="lg">
          <Card>
            <Stack
              padding={3}
              sx={{ minHeight: '50dvh' }}
              paddingBottom={10}
              alignItems="space-around"
              justifyContent="space-between"
            >
              <Stack>
                <Typography variant="h2">
                  {i18n._(/* i18n: erreur */ t`erreur`)} 404
                </Typography>
                <Typography variant="h2">
                  {i18n._(
                    /* i18n: Vous avez demandé une page non repertoriée */ t`Vous avez demandé une page non repertoriée`
                  )}
                </Typography>
              </Stack>
              <Box textAlign="center">
                <Button>
                  <Link href={'/'}>
                    {i18n._(
                      /* i18n: retournez à la page d'accueil */ t`Retournez à la page d'accueil`
                    )}
                  </Link>
                </Button>
              </Box>
            </Stack>
          </Card>
        </Container>
      </Stack>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale)

  return {
    props: {
      translation,
    },
  }
}
